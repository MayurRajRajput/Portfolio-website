import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ islightmode }) => {
  const projects = [
      {
  title: 'Welth – AI Finance Platform',
  description:
    'A modern personal finance application with secure authentication, transaction tracking, budgeting tools, and backend automation.',
  tech: [
    'Next.js',
    'React.js',
    'Tailwind CSS',
    'Clerk',
    'Prisma',
    'Supabase',
    'Inngest',
    'Resend',
    'ShadCN UI'
  ],
  link: 'https://welth-finance-platform-nine.vercel.app/',
  image: '/images/welth.webp',
},
,
    {
      title: 'E-Commerce Website',
      description:
        'A fully functional e-commerce platform with secure authentication, product management, and payment integration.',
      tech: [
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Stripe API',
        'Cloudinary',
      ],
      link: 'https://forever-company.netlify.app/',
      image: '/images/ecommerce.webp',
    },
    {
      title: 'Learning Management System (LMS)',
      description:
        'A full-stack LMS platform allowing instructors to create courses and students to enroll, learn, and track progress.',
      tech: [
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Stripe API',
        'Clerk Auth',
        'Cloudinary',
      ],
      link: 'https://lms-frontend-sigma-two.vercel.app/',
      image: '/images/lms.webp',
    },

    {
      title: 'Chat App',
      description: 'A real-time chat application with private rooms, typing indicators, and online status features.',
      tech: ['React.js', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'Tailwind CSS', 'JWT', 'Cloudinary'],
      link: 'https://chatapp-fullstack-6ax0.onrender.com/',
      image: '/images/chatapp.webp',
    }
  

  ];

  return (
    <div
      id="projects"
      className={`transition-colors ease-linear duration-700 min-h-screen py-16 px-6 md:px-20 ${
        islightmode ? 'text-black bg-gray-200' : 'text-white bg-black'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl flex flex-col overflow-hidden transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl ${
                islightmode ? 'bg-gray-200 text-gray-800' : 'bg-neutral-800 text-gray-200'
              }`}
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-contain object-top"
                />
              )}

              {/* Project Details */}
              <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 transition-colors ease-linear duration-700 rounded-full ${
                          islightmode ? 'bg-gray-300' : 'bg-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-800"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
