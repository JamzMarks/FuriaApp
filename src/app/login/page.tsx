// // src/components/AuthForm.tsx
// 'use client'
// import React, { useState } from 'react';

// const AuthForm: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '', username: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(formData);
//     // Aqui futuramente vamos mandar para o back-end!
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800">
//       <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
//         {/* Logo Placeholder */}
//         <div className="flex justify-center mb-6">
//           <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
//             🎮
//           </div>
//         </div>

//         <h2 className="text-white text-2xl font-bold text-center mb-8">
//           {isLogin ? 'Entrar na Plataforma' : 'Criar Conta'}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {!isLogin && (
//             <input
//               type="text"
//               name="username"
//               placeholder="Nome de Usuário"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             />
//           )}

//           <input
//             type="email"
//             name="email"
//             placeholder="E-mail"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Senha"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//           />

//           {!isLogin && (
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirmar Senha"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           )}

//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-yellow-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
//           >
//             {isLogin ? 'Entrar' : 'Cadastrar'}
//           </button>
//         </form>

//         <div className="text-center text-gray-400 mt-6">
//           {isLogin ? (
//             <>
//               Não tem conta?{' '}
//               <button onClick={() => setIsLogin(false)} className="text-yellow-400 hover:underline">
//                 Cadastre-se
//               </button>
//             </>
//           ) : (
//             <>
//               Já tem conta?{' '}
//               <button onClick={() => setIsLogin(true)} className="text-purple-400 hover:underline">
//                 Faça login
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
'use client';
import React, { useState } from 'react';
import { StepFormWrapper } from './components/StepFormWrapper';
import { StepAccountForm } from './components/StepAccountForm';
import { StepProfileForm } from './components/StepProfileForm';
import { StepInterestsForm } from './components/StepInterestsForm';
import { StepNavigation } from './components/StepNavigation';

const AuthForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    cpf: '',
    birthdate: '',
    address: '',
    interests: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados finais:', formData);
    // Envio para o back-end será feito aqui
  };

  const steps = [
    {
      title: 'Criar Conta',
      content: <StepAccountForm formData={formData} onChange={handleChange} />,
    },
    {
      title: 'Informações Pessoais',
      content: <StepProfileForm formData={formData} onChange={handleChange} />,
    },
    {
      title: 'Interesses em eSports',
      content: <StepInterestsForm formData={formData} toggleInterest={toggleInterest} />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <StepFormWrapper title={steps[step].title}>
          {steps[step].content}
          <StepNavigation
            step={step}
            total={steps.length}
            onNext={handleNext}
            onPrev={handlePrev}
            isLastStep={step === steps.length - 1}
          />
        </StepFormWrapper>
      </form>
    </div>
  );
};

export default AuthForm;
