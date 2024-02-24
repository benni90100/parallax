export function Card() {
    return(
        
	<div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
		<img className="rounded-lg  sm:m-h-64 md:h-64 w-full" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720"
                                    alt="" />
		<a href="#!">
			<div
				className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
			</div>
		</a>
	</div>

	

    )
}