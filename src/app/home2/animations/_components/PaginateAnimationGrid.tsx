"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { z } from "zod";
const Pages = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
});

export default function PaginateAnimationGrid({
  pages,
}: {
  pages: z.infer<typeof Pages>;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const sp = new URLSearchParams(searchParams);

  const handlePrevButton = () => {
    if (pages.currentPage - 1 < 1) {
      sp.set("page", "1");
    } else {
      sp.set("page", String(Number(pages.currentPage - 1)));
    }
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };

  const handleNextButton = () => {
    if (pages.currentPage + 1 > pages.totalPages) {
      sp.set("page", String(pages.totalPages));
    } else {
      sp.set("page", String(pages.currentPage + 1));
    }
    router.push(`${pathname}?${sp.toString()}`,{scroll:false});
  };

  useEffect(()=>{

  },[pathname,searchParams])

  return (
    <>
      <div className="py-10">
        <Pagination className="cursor-pointer">
          {pages && pages.totalPages > 4 ? (
            <>
              <PaginationContent className="cursor-pointer">
                <PaginationItem>
                  <PaginationPrevious
                    className="cursor-pointer"
                    onClick={handlePrevButton}
                  />
                </PaginationItem>
                {
                  <>
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => {
                          sp.set("page", "1");
                          router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                        }}
                        isActive={pages.currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    {pages.currentPage === 1 ? (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => {
                            sp.set("page", "2");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}
                  </>
                }
                {pages.currentPage >= 4 ? (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <></>
                )}
                {pages.currentPage >= 2 &&
                pages.currentPage <= pages.totalPages - 1 ? (
                  <>
                    {pages.currentPage - 1 >= 2 ? (
                      <PaginationItem>
                        <PaginationLink
                          onClick={() => {
                            sp.set("page", String(pages.currentPage - 1));
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        >
                          {pages.currentPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}

                    <PaginationItem>
                      <PaginationLink
                        onClick={() => {
                          sp.set("page", String(pages.currentPage));
                          router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                        }}
                        isActive
                      >
                        {pages.currentPage}
                      </PaginationLink>
                    </PaginationItem>

                    {pages.currentPage + 1 <= pages.totalPages - 1 ? (
                      <PaginationItem>
                        <PaginationLink
                               onClick={()=>{
                                sp.set("page",String(pages.currentPage + 1));
                                router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                              }}
                          
                        >
                          {pages.currentPage + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}

                {pages.currentPage <= pages.totalPages - 3 ? (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <></>
                )}

                {
                  <>
                    {pages.currentPage === pages.totalPages ? (
                      <PaginationItem>
                        <PaginationLink
                               onClick={()=>{
                                sp.set("page",String(pages.currentPage - 1));
                                router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                              }}
                          
                        >
                          {pages.currentPage - 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : (
                      <></>
                    )}
                    <PaginationItem>
                      <PaginationLink
                               onClick={()=>{
                                sp.set("page",String(pages.totalPages));
                                router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                              }}
                        isActive={pages.currentPage === pages.totalPages}
                      >
                        {pages.totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                }

                <PaginationItem>
                  <PaginationNext
                    className=" cursor-pointer"
                    onClick={handleNextButton}
                  />
                </PaginationItem>
              </PaginationContent>
            </>
          ) : (
            <></>
          )}
          {pages && pages.totalPages >= 1 && pages.totalPages <= 4 ? (
            <>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={handlePrevButton} />
                </PaginationItem>
                {pages && pages.totalPages === 1 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","1");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}
                {pages && pages.totalPages === 2 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","1");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","2");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 2}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}
                {pages && pages.totalPages === 3 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","1");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","2");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 2}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","3");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 3}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}
                {pages && pages.totalPages === 4 ? (
                  <>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","1");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 1}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","2");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 2}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","3");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 3}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                          onClick={()=>{
                            sp.set("page","4");
                            router.push(`${pathname}?${sp.toString()}`,{scroll:false});
                          }}
                        isActive={pages.currentPage === 4}
                      >
                        4
                      </PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <></>
                )}

                <PaginationItem>
                  <PaginationNext onClick={handleNextButton} />
                </PaginationItem>
              </PaginationContent>
            </>
          ) : (
            <></>
          )}
        </Pagination>
      </div>
    </>
  );
}
