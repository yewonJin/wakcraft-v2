"use client";

import { medium } from "@/app/layout";
import SearchResult from "@/components/Game/WhoseWork/SearchResult";
import FormField from "@/components/common/Form/FormField";
import Input from "@/components/common/Input/Input";
import SelectBox from "@/components/common/SelectBox/SelectBox";
import { content } from "@/domains/schedule";
import { useSchedule } from "@/hooks/Admin/Schedule/useSchedule";

export default function Page() {
  const {
    isEdit,
    scheduleForm,
    schedules,
    searchInput,
    highlightedArchitects,
    setSearchInput,
    handleInputChange,
    handleSelectChange,
    handleKeyDown,
    removeParticipant,
    handleEditClick,
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
              {`스케쥴 ${isEdit ? "수정" : "추가"}`}
            </h3>
            <button
              className=" bg-background-tertiary p-2 px-4 text-text-primary"
              onClick={handleSubmit}
            >
              {isEdit ? "수정" : "추가"}
            </button>
          </div>
          <div className="mt-8 flex gap-4 text-text-secondary">
            <FormField label="상태">
              <select className="h-[40px] w-[100px] rounded-md border-2 border-background-tertiary bg-background-primary pl-2 text-text-secondary outline-none">
                <option value="before_announcement">공지 전</option>
                <option value="after_announcement">공지 후</option>
                <option value="after_content">컨텐츠 후</option>
              </select>
            </FormField>
            <FormField label="날짜">
              <Input
                type="date"
                value={scheduleForm.date}
                name="date"
                handleInputChange={handleInputChange}
              />
            </FormField>
            <FormField label="날짜">
              <SelectBox
                width="160px"
                height="40px"
                value={scheduleForm.content}
                name="content"
                handleSelectChange={handleSelectChange}
                options={content}
              />
            </FormField>
            <FormField label="회차">
              <Input
                name="episode"
                value={scheduleForm.episode}
                type="number"
                width="50px"
                handleInputChange={handleInputChange}
              />
            </FormField>
            <FormField label="조공 컨텐츠?">
              <select
                value={scheduleForm.isTributeContent ? "true" : "false"}
                name="isTributeContent"
                className="h-[40px] w-[80px] rounded-md border-2 border-background-tertiary bg-background-primary pl-2 text-text-secondary outline-none"
                onChange={handleSelectChange}
              >
                <option value={"true"}>예</option>
                <option value={"false"}>아니오</option>
              </select>
            </FormField>
          </div>
          <div className="mt-4 flex gap-4 text-text-secondary">
            <FormField label="컨텐츠 제목">
              <Input
                type="text"
                name="title"
                value={scheduleForm.title}
                handleInputChange={handleInputChange}
              ></Input>
            </FormField>
            <FormField label="공지 링크">
              <Input
                type="text"
                name="announcement_link"
                value={scheduleForm.announcement_link}
                handleInputChange={handleInputChange}
              />
            </FormField>
            <FormField label="유튜브 링크">
              <Input
                type="text"
                name="youtube_link"
                value={scheduleForm.youtube_link}
                handleInputChange={handleInputChange}
              />
            </FormField>
          </div>
          <div className="mt-4 flex gap-4">
            <FormField label="참가자">
              <div className="relative">
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
            </FormField>
            <div className="flex flex-col gap-2 text-text-secondary">
              <p>참가자 명단</p>
              <div className="h-[300px] w-[200px] bg-background-secondary">
                {scheduleForm.participants.map((item, index) => (
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
          <ul className="mt-4 flex flex-col gap-2">
            {schedules?.map((schedule, index) => (
              <li
                key={schedule.date}
                className="flex items-center gap-2 bg-background-secondary px-2 py-2 text-text-secondary"
              >
                <p>{schedule.status}</p>
                <p>{schedule.date}</p>
                <p>{schedule.content}</p>
                <p>{schedule.episode}</p>
                <button
                  className=" bg-background-tertiary p-2"
                  onClick={() => handleEditClick(index)}
                >
                  수정
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
