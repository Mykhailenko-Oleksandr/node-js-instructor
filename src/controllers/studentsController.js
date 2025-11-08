// src/controllers/studentsController.js

import createHttpError from 'http-errors';
import { Student } from '../models/student.js';

// Отримати список усіх студентів

export const getStudents = async (req, res) => {
  // Отримуємо параметри пагінації
  const {
    page = 1,
    perPage = 10,
    gender,
    minAvgMark,
    search,
    // Отримуємо значення параметрів сортування
    // дефолтне сортування по _id
    sortBy = '_id',
    sortOrder = 'asc',
  } = req.query;

  const skip = (page - 1) * perPage;

  // Додаємо критерій пошуку тільки студентів поточного користувача
  const studentsQuery = Student.find({ userId: req.user._id });

  // Текстовий пошук по name (працює лише якщо створено текстовий індекс)
  if (search) {
    studentsQuery.where({
      $text: { $search: search },
    });
  }

  // Будуємо фільтр
  if (gender) {
    studentsQuery.where('gender').equals(gender);
  }
  if (minAvgMark) {
    studentsQuery.where('avgMark').gte(minAvgMark);
  }

  // Пагінація + сортування
  const [totalItems, students] = await Promise.all([
    studentsQuery.clone().countDocuments(),
    studentsQuery
      .skip(skip)
      .limit(perPage)
      // Додамєдо сортування в ланцюжок методів квері
      .sort({ [sortBy]: sortOrder }),
  ]);

  // Обчислюємо загальну кількість «сторінок»
  const totalPages = Math.ceil(totalItems / perPage);

  res.status(200).json({
    page,
    perPage,
    totalItems,
    totalPages,
    students,
  });
};

// Отримати одного студента за id
export const getStudentById = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findOne({
    _id: studentId,
    userId: req.user._id,
  });

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};

export const createStudent = async (req, res) => {
  const student = await Student.create({
    ...req.body,
    // Додаємо властивість userId
    userId: req.user._id,
  });

  res.status(201).json(student);
};

export const deleteStudent = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findOneAndDelete({
    _id: studentId,
    // Критерій пошуку по userId
    userId: req.user._id,
  });

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};

export const updateStudent = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findOneAndUpdate(
    // Критерій пошуку по userId
    { _id: studentId, userId: req.user._id },
    req.body,
    { new: true },
  );

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};
