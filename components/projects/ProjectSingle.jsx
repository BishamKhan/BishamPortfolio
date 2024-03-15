import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
			>
<div class="h-[90%] max-w-smh-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
    <div className='h-[60%] overflow-hidden'>
        <img class="w-full h-full object-fill rounded-t-xl" src={props.img} alt="Sunset in the mountains"/>
    </div>
    <div class="text-center px-6 py-6">
        <div class="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">{props.title}</div>
        <p class="text-lg text-ternary-dark dark:text-ternary-light">
            {props.category}
        </p>
    </div>
</div>

				{/* <div className="bg-black h-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div className=''>
						<img
							src={props.img}
							className="h-[80%] overflow-hidden rounded-t-xl border-none"
							alt="Single Project"
							layout="responsive"
							// width={100}
							// height={100}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{props.category}
						</span>
					</div>
				</div> */}
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
