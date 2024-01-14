/* eslint-disable react/prop-types */

const Menu = ({ handleCreateFile, handleSaveFile, handleCompileCode }) => {
    return (
        <div className='flex gap-5 p-2 bg-black'>
            <button onClick={handleCreateFile} className='bg-white text-gray-800 px-5 py-2 tracking-[2px] uppercase text-xs font-medium hover:bg-blue-500 hover:text-white'>New File</button>
            <button onClick={handleSaveFile} className='bg-white text-gray-800 px-5 py-2 tracking-[2px] uppercase text-xs font-medium hover:bg-blue-500 hover:text-white'>Save File</button>
            <button onClick={handleCompileCode} className='bg-white text-gray-800 px-5 py-2 tracking-[2px] uppercase text-xs font-medium hover:bg-blue-500 hover:text-white'>Compile Code</button>
        </div>
    )
}

export default Menu