// app/profile/edit.tsx
export default function EditProfilePage() {
    return (
        <section className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>

            <form className="space-y-4">
                {/* Name Field */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Bio Field */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="bio">
                        About Me
                    </label>
                    <textarea
                        id="bio"
                        rows={4}
                        className="w-full p-2 border rounded-md"
                        placeholder="Write something about yourself"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                >
                    Save Changes
                </button>
            </form>
        </section>
    );
}
