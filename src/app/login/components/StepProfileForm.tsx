import React from 'react';

export const StepProfileForm = ({ formData, onChange }: any) => (
  <>
    <input type="text" name="name" placeholder="Nome Completo" value={formData.name} onChange={onChange} className="input" />
    <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={onChange} className="input" />
    <input type="date" name="birthdate" value={formData.birthdate} onChange={onChange} className="input" />
    <input type="text" name="address" placeholder="Endereço" value={formData.address} onChange={onChange} className="input" />
  </>
);