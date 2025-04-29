import React from 'react';

interface Props {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StepAccountForm: React.FC<Props> = ({ formData, onChange }) => (
  <>
    <input type="text" name="username" placeholder="Nome de Usuário" value={formData.username} onChange={onChange} className="input" />
    <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={onChange} className="input" />
    <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={onChange} className="input" />
    <input type="password" name="confirmPassword" placeholder="Confirmar Senha" value={formData.confirmPassword} onChange={onChange} className="input" />
  </>
);