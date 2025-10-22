"use client";

import { useState } from 'react';
import ContactSupport from '../components/ContactSupport';
import LeaveReview from '../components/LeaveReview';
import { Button } from '../components/ui/button';

export default function Home() {
  const [view, setView] = useState<'support' | 'review'>('support');

  return (
    <div>
      <div className="flex justify-center p-4">
        <Button
          onClick={() => setView(view === 'support' ? 'review' : 'support')}
          className="bg-orange-500 text-white hover:bg-orange-600"
        >
          Switch to {view === 'support' ? 'Leave a Review' : 'Contact Support'}
        </Button>
      </div>
      {view === 'support' ? <ContactSupport /> : <LeaveReview />}
    </div>
  );
}
