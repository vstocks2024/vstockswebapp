"use client";
import MainLayout from "@/components/layouts/MainLayout";
import { useParams } from "next/navigation";

export default function CategoryNamePage(){
    const params = useParams<{ tag: string; item: string }>();
    console.log(params);
    return (<>
        <MainLayout>
        Category Name Page not ready yet
        </MainLayout>
        </>);
}