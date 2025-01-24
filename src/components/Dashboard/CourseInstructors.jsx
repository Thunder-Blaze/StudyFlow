import React from 'react';
import './CourseInstructors.css'; 
function CourseInstructors() {
  const instructors = [
    {
      name: 'Instructor 1',
      image: 'https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1', 
    },
    {
      name: 'Instructor 2',
      image: 'https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1', 
    },
    {
      name: 'Instructor 3',
      image: 'https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1', 
    },
  ];

  return (
    <div className="instructors">
      <div className="header">
        <h3>Course Instructors</h3>
        <a href="#" className="see-all">
          See all
        </a>
      </div>
      <div className="instructors-list">
        {instructors.map((instructor, index) => (
          <div key={index} className="instructor">
            <div className="image-container">
              <img src={instructor.image} alt={instructor.name} className="instructor-image" />
            </div>
            <p className="instructor-name">{instructor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseInstructors;
