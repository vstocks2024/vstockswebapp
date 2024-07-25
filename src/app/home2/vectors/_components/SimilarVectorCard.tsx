"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Vector_Url } from '@/lib/types';
import { z } from 'zod';

export default function SimilarVectorCard({card}:{card:z.infer<typeof Vector_Url>}) {
    const router=useRouter();
  return (
    <>
    <button>
          <img
            className="border w-[150px] h-[150px] rounded-md aspect-auto border-teal-600"
            src={card.url}
            alt=""
          />
    </button>
    </>
  )
}
