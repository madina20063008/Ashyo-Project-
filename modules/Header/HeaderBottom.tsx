'use client'

import { getCategories } from '@/service/getCategories'
import { HeaderCategoriesType } from '@/types/HeaderBottomType'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function HeaderBottom() {
  const { data: categories, isLoading, isError } = getCategories()

  return (
    <div>
      <nav className="containers flex items-center justify-between py-4">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          categories?.map((item: HeaderCategoriesType) => (
            <Link
              key={item.id}
              href="/"
              className="text-[#545D6A] text-[16px] hover:text-[#134E9B]"
            >
              {item.name}
            </Link>
          ))
        )}
      </nav>

      <div className="bg-[#F3F0F0] mt-[30px] mb-[100px]">
        <div className="w-[1165px] mx-auto flex justify-between">
          <div className="mt-[140px]">
            <h1 className="font-black text-[44px]">Siz kutgan Xiaomi 12 Mi Laite</h1>
            <p className="text-[#545D6A] pt-[6px]">
              Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi <br />
              arziydigan takliflarimizdan biridir!
            </p>
            <button className="bg-[#134E9B] text-white flex gap-[20px] py-[12px] px-[46px] font-medium text-[16px] rounded-[6px] mt-[22px] h-[50px]">
              Batafsil
            </button>
            <div className="flex mt-[70px]">
              <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
              <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
              <span className="w-8 h-8 bg-[#95BEF3] rounded-full mx-1 border-[8px] border-white"></span>
              <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
              <span className="w-3 h-3 bg-white rounded-full mx-1 mt-[10px]"></span>
            </div>
          </div>
          <Image
            src="/phone.png"
            alt="Xiaomi phone"
            width={300}
            height={450}
            className="h-[450px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
