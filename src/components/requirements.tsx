import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

interface EcommerceRequirements {
  businessName: string;
  contactEmail: string;
  targetAudience: string;
  productCategories: string[];
  paymentMethods: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<EcommerceRequirements>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
    }, 2000)
      .catch((err) => {
        setError('An error occurred while submitting the form.');
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Ecommerce Requirements Form">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register("businessName", { required: "Business name is required." })}
          className={`form-input ${errors.businessName ? 'border-red-500' : ''}`}
          aria-invalid={errors.businessName ? true : false}
        />
        <p className="mt-1 text-sm text-red-600" id="businessName-error">{errors.businessName?.message}</p>
      </div>

      {/* Repeat similar structure for other fields */}

      <button type="submit" disabled={loading} className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

interface EcommerceRequirements {
  businessName: string;
  contactEmail: string;
  targetAudience: string;
  productCategories: string[];
  paymentMethods: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<EcommerceRequirements>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
    }, 2000)
      .catch((err) => {
        setError('An error occurred while submitting the form.');
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Ecommerce Requirements Form">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register("businessName", { required: "Business name is required." })}
          className={`form-input ${errors.businessName ? 'border-red-500' : ''}`}
          aria-invalid={errors.businessName ? true : false}
        />
        <p className="mt-1 text-sm text-red-600" id="businessName-error">{errors.businessName?.message}</p>
      </div>

      {/* Repeat similar structure for other fields */}

      <button type="submit" disabled={loading} className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-300 disabled:opacity-25 transition ease-in-out duration-150">
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;