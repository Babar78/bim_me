"use client";
import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import LoadingBackdrop from "@/components/LoadingBackdrop";


const Login = () => {
    // Global
    const router = useRouter();

    // Loading Backdrop
    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState({
        email: "",
        password: "",
    });

    const handleChange = (e, field) => {
        setData({ ...data, [field]: e });
    };

    // Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // if user already exists show aleat based on response status
            if (res.status === 400) {
                const resData = await res.json();
                alert(resData.message);
            }

            if (res.ok) {
                const resData = await res.json();

                // Tocken Management
                const { token } = resData;
                document.cookie = `token=${token}; path=/`;
                router.replace("/");
                setData({
                    email: "",
                    password: "",
                });
            }
        } catch (err) {
            alert("An error occurred while logging in the user");
            console.log(err);
        } finally {
            setLoading(false); // Set loading state to false when the fetch operation is complete
        }
    };

    return (
        <>
            <LoadingBackdrop loading={loading} />
            <div className="lg:grid grid-cols-2 w-screen h-screen relative max-[1024px]:bg-login-bg bg-cover bg-center flex justify-center items-center md:p-0 p-10">
                <div className="space-y-5 lg:bg-transparent bg-gradient-to-t from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)] lg:border-0 border-[0.5px] rounded-2xl p-10 flex flex-col justify-center items-center">
                    <Image
                        src="/logo/logo.svg"
                        alt="logo"
                        width={50}
                        height={40}
                        className="w-auto h-auto min-w-[150px]"
                    />
                    <h1 className="regular-24 text-white">Login</h1>
                    <form className="space-y-5 max-w-[500px]" onSubmit={handleSubmit}>
                        <CustomInput
                            id="email"
                            label="Email"
                            type="email"
                            inputFieldType="text-field"
                            variant="filled"
                            onUpdate={(newValue) => handleChange(newValue, "email")}
                            backgroundColor="white"
                            value={data.email}
                            required
                        />
                        <CustomInput
                            id="user-password"
                            label="Password"
                            inputFieldType="password"
                            variant="filled"
                            onUpdate={(newValue) => handleChange(newValue, "password")}
                            backgroundColor="white"
                            value={data.password}
                            required
                        />

                        <button
                            className={`regular-16 whitespace-nowrap rounded-md w-full bg-gradientPattern text-white py-2 px-3 min-h-[56px]`}
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <p className="regular-14 lg:text-black text-gray-200 text-center">
                        Don't have an account?{" "}
                        <Link href="/signup" className="underline text-primary" replace>
                            Register
                        </Link>
                    </p>
                </div>
                <div className="hidden lg:flex lg:bg-login-bg bg-cover bg-center w-full h-full justify-center items-center">
                    <div className="text-white flex flex-col items-center">
                        <Image
                            src="/logo/logo-white.svg"
                            alt="logo"
                            width={50}
                            height={40}
                            className="w-auto h-auto min-w-[150px]"
                        />
                        <p className="regular-16 mt-6 text-white xl:max-w-[520px] text-center">
                            Unveil Infinite Worlds! <br />
                            3D Terrain Generation Thorugh Procedural Generation
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
