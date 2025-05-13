const Introduction = () => {
	return (
		<div className="pt-8">
			<div className="text-4xl/3">
				Hello! I'm <span className="font-bold">Katie Zhang</span><span className="text-red-500 text-6xl">.</span>
			</div>
			<div className="pt-6 pr-1 mb-6 text-lg/5 space-mono-regular">
				This is a simple, single-page portfolio website I coded to expand on the "Selected Projects" portion of my<span> </span>
				<a href="https://docs.google.com/document/d/19tDCcU47kC7o0ZqEIgDvxRf_M26zFYRtPh05g1-cjR0/edit?usp=sharing" target="_blank" className="text-red-500">
					resume
				</a>
				.
				It features more detailed explanations and demos!
				Feel free to stay for as long <span className="text-xs">(or as short)</span> as you want😄
				Click <a href="https://github.com/kzhangt/portfolio" target="_blank" className="text-red-500">here</a> for the github repo.
			</div>
			<hr className="border-red-500"/>
		</div>
	)
}

export default Introduction;