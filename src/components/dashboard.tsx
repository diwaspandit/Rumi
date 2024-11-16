import React, { useState, useEffect } from "react";
 
interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
  location: string;
  major: string;
  match: number;
  image: string;
}
 
const Dashboard: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [filters, setFilters] = useState({
    location: "",
    major: "",
  });
 
  useEffect(() => {
    // Fetch the profiles from a JSON file or backend API
    const fetchProfiles = async () => {
      try {
        const response = await fetch("/profiles.json"); // Replace with your backend API URL
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
 
    fetchProfiles();
  }, []);
 
  // Apply filters to profiles
  const filteredProfiles = profiles.filter((profile) => {
    return (
      (filters.location ? profile.location === filters.location : true) &&
      (filters.major ? profile.major === filters.major : true)
    );
  });
 
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">RUMI</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <span className="sr-only">Settings</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </header>
 
      <main className="mt-6">
        <div className="flex items-center space-x-4 mb-6">
          {/* Location Filter */}
          <div>
            <select
              className="px-4 py-2 bg-white rounded-md shadow"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
            >
              <option value="">Location</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Florida">Florida</option>
            </select>
          </div>
 
          {/* Major Filter */}
          <div>
            <select
              className="px-4 py-2 bg-white rounded-md shadow"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, major: e.target.value }))
              }
            >
              <option value="">Major</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
            </select>
          </div>
        </div>
 
        {/* Applied Filters */}
        <div className="flex space-x-2 mb-6">
          {filters.location && (
            <button
              className="px-3 py-1 bg-gray-200 rounded-md"
              onClick={() => setFilters((prev) => ({ ...prev, location: "" }))}
            >
              {filters.location}
            </button>
          )}
          {filters.major && (
            <button
              className="px-3 py-1 bg-gray-200 rounded-md"
              onClick={() => setFilters((prev) => ({ ...prev, major: "" }))}
            >
              {filters.major}
            </button>
          )}
        </div>
 
        {/* Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="p-4 bg-white rounded-md shadow hover:shadow-lg transition"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-bold">
                      {profile.name}, {profile.age}
                    </h2>
                    <p className="text-gray-500">{profile.bio}</p>
                  </div>
                  <span className="ml-auto text-lg font-bold">
                    {profile.match}%
                  </span>
                </div>
 
                <div className="mt-4 flex space-x-2">
                  <button className="px-3 py-1 bg-gray-200 rounded-md">
                    {profile.location}
                  </button>
                  <button className="px-3 py-1 bg-gray-200 rounded-md">
                    {profile.major}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No profiles found.</p>
          )}
        </div>
      </main>
    </div>
  );
};
 
export default Dashboard;
 