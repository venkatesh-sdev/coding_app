/* eslint-disable react/prop-types */


const FilesList = ({ files, handleFileChange, handleCloseFile }) => {
    return (
        <div className='flex gap-1 w-full overflow-scroll'>
            {
                files.map(
                    (file, index) =>
                        <div className='bg-gray-500 flex gap-3 w-fit  px-2 py-1' key={file.id}>
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