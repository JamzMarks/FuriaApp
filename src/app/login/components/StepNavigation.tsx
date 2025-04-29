import React from 'react';

interface Props {
  step: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  isLastStep: boolean;
}

export const StepNavigation: React.FC<Props> = ({ step, total, onNext, onPrev, isLastStep }) => (
  <div className="flex justify-between pt-4">
    {step > 0 && (
      <button type="button" onClick={onPrev} className="text-yellow-400 hover:underline">
        Voltar
      </button>
    )}
    {!isLastStep ? (
      <button type="button" onClick={onNext} className="ml-auto bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
        Próximo
      </button>
    ) : (
      <button type="submit" className="ml-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
        Finalizar Cadastro
      </button>
    )}
  </div>
);
