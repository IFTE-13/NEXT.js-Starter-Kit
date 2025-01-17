"use client"
import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { navLinks, siteName } from '@/lib/constants';
import { Menu } from "lucide-react"
import { ModeToggle } from '../toggle-mode';

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/75">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link 
            href="/" 
            className="flex z-40 font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span>{siteName}</span>
          </Link>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            
            <div className="hidden sm:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={buttonVariants({
                    variant: link.variant,
                    size: 'sm',
                    className: 'text-sm font-medium transition-colors'
                  })}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-8 w-8 px-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] sm:w-[400px] border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
                >
                  <SheetHeader>
                    <SheetTitle className="text-gray-900 dark:text-gray-100">
                      {siteName}
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={buttonVariants({
                          variant: link.variant,
                          size: 'sm',
                          className: 'w-full text-sm font-medium transition-colors'
                        })}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;