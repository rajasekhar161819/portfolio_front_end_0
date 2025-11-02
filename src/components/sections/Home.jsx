import { RevealOnScroll } from "../RevealOnScroll"


// export const Home = ()=>{
//     return <section id="home" className="min-h-screen flex items-center justify-center relative">
//         <RevealOnScroll>
//             <div className="text-center z-10 px-4">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
//                     Hi, I'm Raja Sekhar
//                 </h1>
//                 <p className="text-gray-400 mb-8 text-lg max-w-lg mx-auto">
//                     I'm a full-stack developer who loves crafting clean, scalable web
//                     applications. My goal is to build solutions that offer both
//                     exceptional performance and delightful user experiance  
//                 </p>
//                 <div className="flex justify-center space-x-4">
//                     <a href="#projects" 
//                     className="bg-blue-500 text-white py-3 px-6 rounded font-medium transaction relative overflow-hidden hover:-translate-y-0.5
//                     hover:shadow-[0_0_15px_rgba(59, 130, 256, 0.4)]">
//                         View Projects
//                     </a>
//                     <a href="#contact" 
//                     className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transaction-all duration-200
//                     hover:-translate-y-0.5
//                     hover:shadow-[0_0_15px_rgba(59, 130, 256, 0.2)] hover:bg-blue-500/10">
//                         Contact Me
//                     </a>
//                 </div>
//             </div>
//         </RevealOnScroll>
//     </section>
// }



// import { useEffect, useRef } from "react";

// export const Home = () => {
//   const canvasRef = useRef(null);

//   // useEffect(() => {
//   //   const canvas = canvasRef.current;
//   //   const ctx = canvas.getContext("2d");

//   //   let animationFrameId;

//   //   const symbols = ["{ }", "</>", "()", "function", "let", "const", "=>"];
//   //   const particles = [];

//   //   const resizeCanvas = () => {
//   //     canvas.width = window.innerWidth;
//   //     canvas.height = window.innerHeight;
//   //   };

//   //   resizeCanvas();

//   //   const random = (min, max) => Math.random() * (max - min) + min;

//   //   for (let i = 0; i < 60; i++) {
//   //     particles.push({
//   //       x: random(0, canvas.width),
//   //       y: random(0, canvas.height),
//   //       text: symbols[Math.floor(Math.random() * symbols.length)],
//   //       size: random(16, 28),
//   //       speedX: random(-0.3, 0.3),
//   //       speedY: random(-0.3, 0.3),
//   //     });
//   //   }

//   //   const draw = () => {
//   //     // 🌟 KEY PART: Fill the entire canvas with a solid background color
//   //     ctx.fillStyle = "#0a0a0a"; // Match your page background
//   //     ctx.fillRect(0, 0, canvas.width, canvas.height);

//   //     particles.forEach((p) => {
//   //       ctx.fillStyle = "#00eaff";
//   //       ctx.font = `${p.size}px monospace`;
//   //       ctx.fillText(p.text, p.x, p.y);

//   //       p.x += p.speedX;
//   //       p.y += p.speedY;

//   //       // bounce off walls
//   //       if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
//   //       if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
//   //     });

//   //     animationFrameId = requestAnimationFrame(draw);
//   //   };

//   //   draw();

//   //   window.addEventListener("resize", resizeCanvas);

//   //   return () => {
//   //     cancelAnimationFrame(animationFrameId);
//   //     window.removeEventListener("resize", resizeCanvas);
//   //   };
//   // }, []);

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 -z-10 pointer-events-none"
//         style={{ background: "transparent" }}
//       />

//       <div className="text-center z-10 px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//           Hi, I'm Raja Sekhar
//         </h1>
//         <p className="text-gray-400 mb-8 text-lg max-w-lg mx-auto">
//           My passion as a full-stack developer lies in building web applications that are not 
//           only scalable and efficient but also enjoyable for users to interact with.
//         </p>
//         <div className="flex justify-center space-x-4">
//           <a
//             href="#projects"
//             className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,256,0.4)]"
//           >
//             View Projects
//           </a>
//           <a
//             href="#contact"
//             className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,256,0.2)] hover:bg-blue-500/10"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };



import { useEffect, useRef } from "react";
import profilePhoto from "../../assets/PortProfile.jpg"; // Import the image

export const Home = () => {
  const canvasRef = useRef(null);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: "transparent" }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Profile Photo */}
          <div className="lg:w-1/3 flex justify-center lg:justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-2">
                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden border-4 border-gray-900">
                  {/* Replace the div below with your actual profile image
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Your Photo</span>
                  </div>
                  If you have an image, use this instead: */}
                  <img 
                    src={profilePhoto} 
                    alt="Raja Sekhar"
                    className="w-full h-full object-cover"
                  />
                 
                </div>
              </div>
              {/* Optional: Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Raja Sekhar
            </h1>
            <p className="text-gray-400 mb-8 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              My passion as a full-stack developer lies in building web applications that are not 
              only scalable and efficient but also enjoyable for users to interact with.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,256,0.4)] text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,256,0.2)] hover:bg-blue-500/10 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
