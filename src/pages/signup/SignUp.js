/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import sliderImg from "../../resources/Images/hero.jpg";

const bloodGroup = [
  "Select Blood Group",
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

const gender = ["Select Gender", "male", "female"];

const signup = () => {
  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const patient = { ...inputs, images: images };
  console.log(patient);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }

  //   if (success) {
  //     alert.success("Project Created Successfully");
  //     navigate("/admin/projects");
  //     dispatch({ type: NEW_PROJECT_RESET });
  //   }
  // }, [dispatch, alert, error, navigate, success]);

  //  Create New Product Function
  const handleCreateProject = (e) => {
    e.preventDefault();

    // dispatch(createProject(project, idToken));
  };

  //   Image Handler
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    // setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.readyState === 2) {
          // setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      {/* Hero section  */}
      <div className="group relative ">
        <img
          className="h-64 w-full object-cover grayscale  lg:h-[550px]"
          src={sliderImg}
          alt="..."
        />
        {/* <div className=" absolute top-36 left-0 flex h-0 w-full flex-col items-center justify-center bg-indigo-700 duration-500  lg:top-60 ">
          <h1 className="text-3xl text-white lg:text-6xl">Career</h1>
          <h1 className="text-xl text-white ">Join the Brownearth Family</h1>
        </div> */}
        <div className="hero-text	sticky  w-full     shadow-sm ">
          <Navbar />
        </div>
      </div>
      <div className="relative m-5 grid grid-cols-1 gap-1 overflow-x-auto shadow-md sm:rounded-lg md:m-20 md:grid-cols-4 md:gap-4">
        <div className="  col-span-3 flex flex-col items-center bg-slate-200 md:p-10 ">
          <p className="text-2xl text-green-600 md:text-4xl">
            Sign Up Form For Patient
          </p>
          <form
            encType="multipart/form-data"
            onSubmit={handleCreateProject}
            className="my-10 "
          >
            {/* First Name  */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">FIRST NAME:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter First Name"
                required
                name="firstName"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Middle Name  */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">MIDDLE NAME:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Middle Name"
                required
                name="middleName"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Last Name  */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">LAST NAME:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Last Name"
                required
                name="lastName"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Date Of Birth  */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">DATE OF BIRTH:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Of Birth ( 06-11-1997 )"
                required
                name="dateOfBirth"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Gender  */}
            <div className="my-5">
              <label className=" ml-5 text-green-600">GENDER:</label>
              <br />

              <select
                name="gender"
                onChange={handleChange}
                className=" ml-5 md:w-96"
              >
                {gender.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>

            {/* Blood Group  */}
            <div className="my-5">
              <label className=" ml-5 text-green-600">BLOOD GROUP:</label>
              <br />

              <select
                name="bloodGroup"
                onChange={handleChange}
                className=" ml-5 md:w-96"
              >
                {bloodGroup.map((bloodGroup) => (
                  <option key={bloodGroup} value={bloodGroup}>
                    {bloodGroup}
                  </option>
                ))}
              </select>
            </div>

            {/* Email  */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">EMAIL:</label>
              <br />
              <input
                type="email"
                className=" ml-5 md:w-96"
                placeholder="Enter email"
                required
                name="email"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Contact NO  */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">CONTACT NO:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Contact No"
                required
                name="contactNo"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/*Emergency Contact NO  */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">
                EMERGENCY CONTACT NO:
              </label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Emergency Contact No"
                required
                name="emergencyContactNo"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Present Address */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">PRESENT ADDRESS:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Present Address"
                required
                name="presentAddress"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Permanent Address */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">PERMANENT ADDRESS:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Permanent Address"
                required
                name="permanentAddress"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Previous History */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">PREVIOUS HISTORY:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Previous Medical History"
                required
                name="previousHistory"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Current Disease */}
            <div className="my-5">
              <label className="ml-5 text-green-600 ">CURRENT DISEASE:</label>
              <br />
              <input
                type="text"
                className=" ml-5 md:w-96"
                placeholder="Enter Current Disease (If Any )"
                required
                name="currentDisease"
                onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Prescription Images */}
            <div className="my-5">
              <label className=" ml-5 text-green-600">
                IMAGES: (You Must Choose Prescription Image File )
              </label>{" "}
              <br />
              <input
                type="file"
                name="previousPrescriptions"
                accept="image/*"
                multiple
                onChange={createProductImagesChange}
                // onChange={(e) => setImages(e.target.files)}
              />
            </div>
            {/* <div className="my-5">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div> */}
            <div className="flex justify-center">
              <button
                type="submit"
                // disabled={loading ? true : false}
                class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-green-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
              >
                <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  {/* Create Service {loading ? <SpinnerButton /> : false} */}
                  Create Patient
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
