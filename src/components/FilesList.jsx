/* eslint-disable react/prop-types */


const FilesList = ({ files, handleFileChange, handleCloseFile, activeIndex }) => {
    return (
        <div className='flex gap-1 w-full overflow-scroll px-2 py-1'>
            {
                files.map(
                    (file, index) =>
                        <div className={` border border-transparent flex gap-3 w-fit  px-2 py-1 ${activeIndex === index ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-800 hover:border-white"}`} key={file.id}>
                            <button onClick={() => handleFileChange(index)} className=' text-white text-sm tracking-[2px] uppercase'>
                                {file.fileName}
                            </button>
                            <button onClick={() => handleCloseFile(file.id, index)} className='text-red-500'>X</button>
                        </div>
                )
            }
        </div>
    )
}

export default FilesList