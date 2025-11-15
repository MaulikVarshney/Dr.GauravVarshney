export default function Profile() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 gap-10 max-w-5xl mx-auto bg-white shadow-lg rounded-xl mt-8">
            {/* Profile Image */}
            <img src="/Dr.GauravVarshney/image/ProfilePic.jpg"
                 alt="Dr. Gaurav Varshney"
                 className="w-52 h-52 object-contain rounded-full border-4 border-gray-200 shadow-md bg-gray-50 p-1"
            />


            {/* Profile Details */}
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Dr. Gaurav Varshney
                </h2>
                <div className="text-gray-700 space-y-2 text-sm md:text-base leading-relaxed">
                    <p>
                        <strong>Father's Name:</strong> Shri Bodh Prakash Gupta
                    </p>
                    <p>
                        <strong>Date of Birth:</strong> 28 June 1974
                    </p>
                    <p>
                        <strong>Nationality:</strong> Indian
                    </p>
                    <p>
                        <strong>Postal Address:</strong> B-541, New Avas Vikas Colony, Civil
                        Lines, Rampur (U.P.) 244901
                    </p>
                    <p>
                        <strong>Permanent Address:</strong> B-541, New Avas Vikas Colony,
                        Civil Lines, Rampur (U.P.) 244901
                    </p>
                    <p>
                        <strong>Telephone No.:</strong> 9412150955, 9457692271
                    </p>
                    <p>
                        <strong>E-mail ID:</strong>{" "}
                        <a
                            href="mailto:varshneygaurav.varshney@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            varshneygaurav.varshney@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
