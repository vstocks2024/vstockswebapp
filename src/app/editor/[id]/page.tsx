import React from 'react'
import MainLayout from '../_components/layout/MainLayout';

export default function EditorIDPage() {
  return (<>
  <MainLayout>
  <iframe className='w-full h-screen' src='http://35.154.166.18:3001/editor'/>
  </MainLayout>
  </>);
}
