import {useLogin} from "../../hooks/useLogin";
import {useEffect, useState} from "react";
import {getUserId} from "../../services/user.service";
import {getUserIdFromToken} from "../../services/auth.service";

export default function ProfileSection() {
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
  const username = useLogin();

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
    <div className="py-24 max-[400px]:py-20 sm:py-28 lg:py-28">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div>
            <h1 className="font-bold text-3xl tracking-wide text-gray-700 max-[400px]:text-2xl lg:text-4xl">
              Profile
            </h1>
          </div>
          <div className="flex gap-20 overflow-hidden w-full flex-col lg:flex-row lg:items-start">
            <div className="flex items-center justify-center">
              <div className="w-60 h-60 overflow-hidden bg-gray-300 flex items-center justify-center rounded-lg max-[400px]:w-full max-[400px]:h-full sm:w-72 sm:h-72 md:w-80 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 overflow-hidden lg:w-full">
              <div className="w-full">
                <h3 className="text-gray-700 text-xl font-medium tracking-wide max-[400px]:text-lg lg:text-2xl">
                  Change your personal data
                </h3>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
