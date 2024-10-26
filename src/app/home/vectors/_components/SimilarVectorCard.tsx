"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Vector_Url } from '@/lib/types';
import { z } from 'zod';
import { useModal } from '@/context/modal';

export default function SimilarVectorCard({card}:{card:z.infer<typeof Vector_Url>}) {
  const modal=useModal();
    const handleCardClick=()=>{
      modal.setVectorItem(card);
    }
    
  return (
    <>
    <button onClick={handleCardClick}>
          <img
            className={`border w-[250px] rounded-md aspect-auto`}
            src={card.url}
            alt=""
          />
    </button>
    </>
  )
}
