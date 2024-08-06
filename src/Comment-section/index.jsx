import { FaRegStar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const CommentSection = () => {

    
    const commentsData = [
        {
            userName: 'taku',
            stars: '',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit id ratione quaerat ea, necessitatibus, blanditiis quos eos labore sapiente commodi deleniti officiis iste ex qui, dolorum nam natus nulla!',
        },
        {
            userName: 'user22',
            stars: '',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit id ratione quaerat ea, necessitatibus, blanditiis quos eos labore sapiente commodi deleniti officiis iste ex qui, dolorum nam natus nulla!',
        },
        {
            userName: 'useer33',
            stars: '',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit id ratione quaerat ea, necessitatibus, blanditiis quos eos labore sapiente commodi deleniti officiis iste ex qui, dolorum nam natus nulla!',
        }
    ]
    return (
        <section >
        <div className="comment-container px-10 py-6 text-text">
            <h1 className="font-bold text-2xl pb-4">Comentarios</h1>
            {commentsData.map((data, index) =>(

            <div className="comment-card flex  bg-gray-100 flex-col px-6  py-4 rounded-md mb-4" key={index}>
                <div className="flex gap-2 items-center pb-3" >
                    <FaUserCircle className="text-xl" />
                    <p className="font-semibold text-lg">{data.userName}</p>
                    <FaStar className="text-yellow-500 text-xl" />
                </div>
               <p>{data.comment}</p>
            </div>
           ))}
        </div>
        <div className="flex flex-col justify-center w-auto items-center py-6 gap-1 bg-gray-100 py-8 rounded-md">
            <h1 className="text-3xl text-text font-bold">Agrega tu Puntuación</h1>
            <p className="text-text text-lg">¿Qué te parecio este anime?</p>
            <div className="flex py-2 text-3xl text-yellow-500 ">
            <FaRegStar className="cursor-pointer" />
            <FaRegStar className="cursor-pointer"/>
            <FaRegStar className="cursor-pointer"/>
            <FaRegStar className="cursor-pointer"/>
            <FaRegStar className="cursor-pointer"/>
            </div>
        </div>
        <div className="add-comment px-10 bg-gray-100 pb-10 rounded-md">
            <h1 className="text-2xl font-bold text-text py-4">Comentar</h1>
            <form action="" className="flex flex-col gap-2 w-auto">
                <input className="border px-4 py-3 rounded-md w-auto"  type="text" placeholder="Username"/>
            <input className="border px-4 py-4 rounded-md h-32" placeholder="Comentar" type="text" />
            <button className="bg-primary w-40 px-2 py-2 mt-3 rounded-xl text-white ">Enviar Comentario</button>
            </form>
           
        </div>
        </section>
    )
}

export default CommentSection