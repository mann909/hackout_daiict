import React from "react";

const UserHero= () => {
  return (
    <div className="flex justify-center items-center min-h-min bg-green-100">
      <div className="bg-white  shadow-lg hover:shadow-xl overflow-hidden w-full ">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/503646746/photo/farmer-spreading-fertilizer-in-the-field-wheat.jpg?s=612x612&w=0&k=20&c=Lgxsjbz0jaYyQrvfzhyAsW2zELtshRP4AtLzkpmcLiE=" 
              alt="Agriculture"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Quote Section */}
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-green-50">
            <blockquote className="text-lg font-semibold italic text-green-700 text-center">
              "Agriculture is the most healthful, most useful, and most noble employment of man."
              <span className="block mt-4 text-green-500">- George Washington</span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHero;