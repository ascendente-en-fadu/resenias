import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  careers: {
    list: [],
    selected: undefined,
  },
  subjects: {
    list: [],
    selected: undefined,
  },
  courses: {
    list: [],
    selected: undefined,
  },
  courseInfo: undefined,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setCareersList: (state, action) => {
      state.careers.list = action.payload;
    },
    selectCareer: (state, action) => {
      const { subjects, courses, courseInfo } = initialState;
      state.careers.selected = action.payload;
      state.subjects = subjects;
      state.courses = courses;
      state.courseInfo = courseInfo;
    },
    unselectCareer: (state) => {
      const { subjects, courses, courseInfo } = initialState;
      state.careers.selected = undefined;
      state.subjects = subjects;
      state.courses = courses;
      state.courseInfo = courseInfo;
    },
    setSubjectsList: (state, action) => {
      state.subjects.list = action.payload;
    },
    selectSubject: (state, action) => {
      const { courses, courseInfo } = initialState;
      state.subjects.selected = action.payload;
      state.courses = courses;
      state.courseInfo = courseInfo;
    },
    setCoursesList: (state, action) => {
      state.courses.list = action.payload;
    },
    selectCourse: (state, action) => {
      state.courses.selected = action.payload;
      state.courseInfo = initialState.courseInfo;
    },
    setCourseInfo: (state, action) => {
      state.courseInfo = action.payload;
    },
    unsetCourseInfo: (state) => {
      state.courseInfo = initialState.courseInfo;
    },
  },
});

export const {
  setCareersList,
  selectCareer,
  unselectCareer,
  setSubjectsList,
  selectSubject,
  setCoursesList,
  selectCourse,
  setCourseInfo,
  unsetCourseInfo,
} = reviewsSlice.actions;

export const reviewsReducer = reviewsSlice.reducer;
