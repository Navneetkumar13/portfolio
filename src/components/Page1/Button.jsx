import { Download } from 'lucide-react'

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

const Button = (props) => {
  return (
    <div>
        <button onClick={handleDownload} className='flex flex-row items-center justify-center gap-3 h-12 w-60 rounded-xl active:scale-90 bg-blue-600 backdrop-blur-xm text-white p-2 cursor-pointer' >
            {props.icon && <Download />}{props.name}
        </button>
    </div>
  )
}

export default Button