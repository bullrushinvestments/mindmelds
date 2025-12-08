import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => setBusinessSpec(response.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{`Error: ${error}`}</div>;

  const renderRequirements = () => {
    return businessSpec?.requirements.map(req => (
      <div key={req.id} className={clsx('p-4 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
        <h3 className="text-lg font-medium" aria-label={`Requirement ${req.title}`}>
          {req.title}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: req.details }} />
      </div>
    ));
  };

  return (
    <section id="business-specification" className={clsx('container mx-auto px-4', isMobile ? 'py-6' : 'py-12')}>
      <h2 className="text-3xl font-bold mb-8">Business Specification</h2>
      {renderRequirements()}
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  id: number;
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<BusinessSpec>('https://api.example.com/business-spec')
      .then(response => setBusinessSpec(response.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{`Error: ${error}`}</div>;

  const renderRequirements = () => {
    return businessSpec?.requirements.map(req => (
      <div key={req.id} className={clsx('p-4 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
        <h3 className="text-lg font-medium" aria-label={`Requirement ${req.title}`}>
          {req.title}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: req.details }} />
      </div>
    ));
  };

  return (
    <section id="business-specification" className={clsx('container mx-auto px-4', isMobile ? 'py-6' : 'py-12')}>
      <h2 className="text-3xl font-bold mb-8">Business Specification</h2>
      {renderRequirements()}
    </section>
  );
};

export default CreateBusinessSpecification;