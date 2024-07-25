import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { z } from "zod";
const Pages = z.object({
  currentPage: z.number(),
  totalPages: z.number(),
});

export default function PaginateVectorGrid({
  pages,
}: {
  pages: z.infer<typeof Pages>;
}) {
  console.log(pages);
  return (
    <>
      <div className="border border-green-500 ">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/home2/vectors?page=${
                  pages.currentPage - 1 < 1 ? 1 : pages.currentPage - 1
                }`}
              />
            </PaginationItem>
            {
              <>
                <PaginationItem>
                  <PaginationLink
                    href={`/home2/vectors?page=1`}
                    isActive={pages.currentPage === 1}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                {pages.currentPage === 1 ? (
                  <PaginationItem>
                    <PaginationLink href={`/home2/vectors?page=2`}>
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
                      href={`/home2/vectors?page=${pages.currentPage - 1}`}
                    >
                      {pages.currentPage - 1}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  <></>
                )}

                <PaginationItem>
                  <PaginationLink
                    href={`/home2/vectors?page=${pages.currentPage}`}
                    isActive
                  >
                    {pages.currentPage}
                  </PaginationLink>
                </PaginationItem>

                {pages.currentPage + 1 <= pages.totalPages - 1 ? (
                  <PaginationItem>
                    <PaginationLink
                      href={`/home2/vectors?page=${pages.currentPage + 1}`}
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
                      href={`/home2/vectors?page=${pages.currentPage - 1}`}
                    >
                      {pages.currentPage - 1}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  <></>
                )}
                <PaginationItem>
                  <PaginationLink
                    href={`/home2/vectors?page=${pages.totalPages}`}
                    isActive={pages.currentPage === pages.totalPages}
                  >
                    {pages.totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            }

            <PaginationItem>
              <PaginationNext
                href={`/home2/vectors?page=${
                  pages.currentPage + 1 > pages.totalPages
                    ? pages.totalPages
                    : pages.currentPage + 1
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
