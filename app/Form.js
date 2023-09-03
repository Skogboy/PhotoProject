"use client";

import { useState } from "react";

import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'


export default function ContactForm() {
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);

		const data = {
			name: String(event.target.name.value),
			email: String(event.target.email.value),
			message: String(event.target.message.value),
		};

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			console.log("Message sent successfully");
			setLoading(false);
			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
			event.target.message.value = "";
		}
		if (!response.ok) {
			console.log("Error sending message");
			setLoading(false);
		}
	}
	return (
        <main>
            <div className=" items-center text-white text-4xl text-center font-bold">
                <h1>Contact</h1>
            </div>

		<form onSubmit={handleSubmit} className="bg-neutral-900">
			<div className="w-full items-center flex flex-col my-4 p-5 ">
				<label className="font-bold text-white pb-3" htmlFor="name">
					Name
				</label>
				<input
					type="text"
					minLength={3}
					maxLength={150}
					required
					className=" p-4 border bg-zinc-800 border-gray-700 md:w-1/2 shadow-lg rounded-xl  "
					autoComplete="off"
					id="name"
				/>
			</div>
			<div className="w-full items-center flex flex-col my-4 p-5 ">
				<label className="font-bold text-white pb-3" htmlFor="email">
					Email
				</label>
				<input
					type="email"
					minLength={5}
					maxLength={150}
					required
					className=" p-4 bg-zinc-800 border border-gray-700 md:w-1/2 border-box shadow-lg rounded-xl   "
					autoComplete="off"
					id="email"
				/>
			</div>
            <div className="w-full items-center flex flex-col my-4 p-5 ">
				<label className="font-bold text-white" htmlFor="message">
					Message
				</label>
				<textarea
					rows={4}
					required
					minLength={10}
					maxLength={500}
					name="message"
					className="w-full items-center p-4 bg-zinc-800 border border-gray-700 md:w-1/2 shadow-lg rounded-xl"
				/>
			</div>
            <div className="itmes-center flex justify-center p-4">
			<button
				type="submit"
				disabled={loading}
				className= "flex flex-col items-center justify-center rounded w-40  bg-gray-700 disabled:bg-gray-400 disabled:text-gray-700 text-white font-medium mt-4 shadow-lg">
				Send Message
			</button>
			
            </div>
			
		</form>
		<div className='text-5xl flex justify-center gap-16 py-10 text-gray-600 dark:text-white'>
          <button ><a href='https://github.com/Skogboy' target='_blank' ><AiFillGithub /></a></button>
          <button ><a href='https://www.linkedin.com/in/benjamin-skogman-6729b4227/' target='_blank' ><AiFillLinkedin /></a></button>
          <button ><a href='mailto:skogman.ben@gmail.com' ><AiOutlineMail /></a></button>
        </div>
        </main>
	);
}