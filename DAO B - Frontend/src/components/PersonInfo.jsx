export default function PersonInfo({ user }) {
    return (
        <div className='flex items-start gap-24 mt-10 sm:flex-nowrap flex-wrap sm:justify-start justify-center'>
            <div className='rounded-xl md:w-[320px] w-full overflow-hidden'>
                <img src={user?.image} />
            </div>
            <div>
                {
                    Object.keys(user).map((key, index) => {
                        return (
                            <p key={index} className='text-sm sm:text-base text-gray-700'>
                                <b className='inline-block w-[80px] capitalize font-bold sm:mr-24 mr-0 mb-4'>{key}:</b> <span>{user[key]}</span>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
