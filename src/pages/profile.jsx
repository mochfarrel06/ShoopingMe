import {Fragment, useEffect, useState} from "react";
import ProfileSection from "../components/Fragments/ProfileSection";
import MainLayouts from "../components/Layouts/MainLayouts";
import {getUserIdFromToken} from "../services/auth.service";
import {getUserId} from "../services/user.service";

export default function ProfilePage() {
  const [userDetails, setUserDetails] = useState({
    address: {
      geolocation: {
        lat: "",
        long: "",
      },
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    id: "",
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    phone: "",
    _v: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = getUserIdFromToken(token);
      getUserId(userId, (data) => {
        setUserDetails({
          name: data.name ? data.name.firstname + " " + data.name.lastname : "",
          username: data.username || "",
          email: data.email || "",
          address: data.address
            ? `${data.address.city}, ${data.address.street}, ${data.address.number}, ${data.address.zipcode}`
            : "",
          phone: data.phone || "",
        });
      });
    }
  }, []);

  const handleInputChange = (event, field) => {
    setUserDetails({
      ...userDetails,
      [field]: event.target.value,
    });
  };

  return (
    <Fragment>
      <MainLayouts>
        <ProfileSection
          title={"Profile"}
          subtitle={"Change your personal data"}
        >
          <div className="flex flex-col gap-4">
            <label className="block">
              <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                Name
              </span>
              <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                <input
                  type="text"
                  name="text"
                  className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                  value={userDetails.name}
                  onChange={(event) => handleInputChange(event, "name")}
                  disabled
                />
                <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                  Edit
                </button>
              </div>
            </label>
            <label className="block">
              <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                Username
              </span>
              <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                <input
                  type="text"
                  name="text"
                  className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                  value={userDetails.username}
                  onChange={(event) => handleInputChange(event, "username")}
                  disabled
                />
                <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                  Edit
                </button>
              </div>
            </label>
            <label className="block">
              <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                Address
              </span>
              <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                <input
                  type="text"
                  name="text"
                  className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                  value={userDetails.address}
                  onChange={(event) => handleInputChange(event, "address")}
                  disabled
                />
                <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                  Edit
                </button>
              </div>
            </label>
            <label className="block">
              <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                Email
              </span>
              <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                <input
                  type="email"
                  name="email"
                  className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                  value={userDetails.email}
                  onChange={(event) => handleInputChange(event, "email")}
                  disabled
                />
                <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                  Edit
                </button>
              </div>
            </label>
            <label className="block">
              <span className="block text-base font-medium text-slate-700 max-[400px]:text-sm">
                Phone
              </span>
              <div className="mt-2 flex gap-5 max-[400px]:flex-col max-[400px]:gap-2">
                <input
                  type="text"
                  name="text"
                  className="px-5 py-2 bg-white border text-gray-500 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 max-[400px]:text-sm"
                  value={userDetails.phone}
                  onChange={(event) => handleInputChange(event, "phone")}
                  disabled
                />
                <button className="px-4 py-2 w-20 bg-gray-600 text-white text-sm font-medium rounded-md lg:px-6 lg:w-24">
                  Edit
                </button>
              </div>
            </label>
          </div>
        </ProfileSection>
      </MainLayouts>
    </Fragment>
  );
}
