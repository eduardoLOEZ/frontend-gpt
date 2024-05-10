import React, { useState } from 'react';

const UserInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [subject, setSubject] = useState('');
  const [career, setCareer] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, id, subject, career, semester });
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Ingrese sus datos
                </h3>
                <div className="mt-2">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ID"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ID
                      </label>
                      <input
                        type="text"
                        id="ID"
                        className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Materia
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="carrera"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Carrera
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
                        value={career}
                        onChange={(e) => setCareer(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Semestre
                      </label>
                      <input
                        type="text"
                        id="semestre"
                        className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        required
                      />
                    </div>
                    {/* Repite lo mismo para los otros campos (id, subject, career, semester) */}
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;
