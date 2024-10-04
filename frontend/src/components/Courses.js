import React, { useState, useEffect } from "react";
import { courseData as initialData } from "./coursesData/Data.js"; // Assuming your data is imported
import StarRatings from "react-star-ratings";
export const Courses = () => {
  // State to hold course data
  const [courses, setCourses] = useState([]);

  // Effect to load the course data
  useEffect(() => {
    // Simulating an API call
    setCourses(initialData);
  }, []);

  return (
    <>
    <div className="container-fluid p-3 courses">
        <div className="row">
            <div className="col-md-12 text-center mt-4">
                <h1>All Available <span>Courses</span></h1>
            </div>
            {courses.map((course, index) => (
                <div className="col-md-3 mt-5" key={index}>
                <div class="card">
                    <img src={course.image} class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title mb-1">{course.name}</h5>
                        <div className="mb-1">
                        <StarRatings
                            rating={course.rating}
                            starRatedColor="#ffcc00"
                            numberOfStars={5}
                            name='rating'
                            starDimension="22px"
                            starSpacing="1px"
                        />
                        </div>
                        <div className="mb-1"><i class="card-text mb-0">{course.technologies}</i><br/>
                        <b className="text-success">₹ {course.fees}</b></div>
                        <div className="label mt-2"><span>{course.label}</span></div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
    </>
  );
};
