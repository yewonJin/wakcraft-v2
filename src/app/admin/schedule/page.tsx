"use client";

import { medium } from "@/app/layout";
import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import Input from "@/components/common/Input";
import { useSchedule } from "@/hooks/Admin/Schedule/useSchedule";

export default function Page() {
  const {
    schedule,
    searchInput,
    highlightedArchitects,
    setSearchInput,
    handleInputChange,
    handleSelectChange,
    handleKeyDown,
    removeParticipant,
    handleSubmit,
  } = useSchedule();

  return (
    <div>
      <h2 className={`${medium.className} text-3xl text-text-primary`}>
        스케쥴
      </h2>
      <div className="mt-16 flex justify-between">
        <div className="">
          <div className="flex justify-between">
            <h3 className={`${medium.className} text-2xl text-text-primary`}>
              스케쥴 추가
            </h3>
            <button
              className=" bg-background-tertiary p-2 px-4 text-text-primary"
              onClick={handleSubmit}
            >
              추가
            </button>
          </div>
          <div className="mt-8 flex gap-4 text-text-secondary">
            <div className="flex flex-col gap-2 [&>input]:h-[45px]">
              <p>상태</p>
              <select
                value={schedule.status}
                name="status"
                className="h-[45px] w-[100px] rounded-md border-2 border-background-tertiary bg-background-primary pl-2 text-text-secondary outline-none"
                onChange={handleSelectChange}
              >
                <option value="before_announcement">공지 전</option>
                <option value="after_announcement">공지 후</option>
                <option value="after_content">컨텐츠 후</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 [&>input]:h-[45px]">
              <p>날짜</p>
              <Input
                type="date"
                value={schedule.date}
                name="date"
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <p>컨텐츠</p>
              <select
                value={schedule.content}
                name="content"
                className="h-[45px] w-[160px] rounded-md border-2 border-background-tertiary bg-background-primary pl-2 text-text-secondary outline-none"
                onChange={handleSelectChange}
              >
                <option value="눕프로해커">눕프로해커</option>
                <option value="배치고사">배치고사</option>
                <option value="이벤트 눕프핵">이벤트 눕프핵</option>
                <option value="조공 컨텐츠">조공 컨텐츠</option>
                <option value="그외">그외</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 [&>input]:h-[45px] [&>input]:w-[50px]">
              <p>회차</p>
              <Input
                name="episode"
                value={schedule.episode}
                type="number"
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-4 flex gap-4 text-text-secondary">
            <div className="flex flex-col gap-2 [&>input]:h-[45px]">
              <p>컨텐츠 제목</p>
              <Input
                type="text"
                name="title"
                value={schedule.title}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2 [&>input]:h-[45px]">
              <p>공지 링크</p>
              <Input
                type="text"
                name="announcement_link"
                value={schedule.announcement_link}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <div className="flex flex-col gap-2 text-text-secondary">
              <p>참가자</p>
              <div className="relative  [&>input]:h-[45px]">
                <Input
                  name="participant"
                  value={searchInput}
                  handleInputChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  onKeyDown={handleKeyDown}
                />
                <SearchResult
                  input={searchInput}
                  setInput={setSearchInput}
                  highlightedArchitects={highlightedArchitects}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-text-secondary">
              <p>참가자 명단</p>
              <div className="h-[300px] w-[200px] bg-background-secondary">
                {schedule.participants.map((item, index) => (
                  <p
                    className="p-2 px-3 hover:cursor-pointer hover:bg-background-tertiary"
                    key={item}
                    onClick={() => removeParticipant(index)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className={`${medium.className} text-2xl text-text-primary`}>
            스케쥴 리스트
          </h3>
          <ul className="mt-4">
            <li className="flex items-center gap-2 bg-background-secondary px-2 py-2 text-text-secondary">
              <p>[공지전]</p>
              <p>2023-12-14</p>
              <p>눕프로해커</p>
              <p>43회</p>
              <button className=" bg-background-tertiary p-2">수정</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
