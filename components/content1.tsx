import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const Content1: NextPage = () => {
  return (
    <header className="self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-0 px-16 top-[0] z-[99] sticky gap-[20px] max-w-full border-b-[1px] border-solid border-border-primary mq1125:pl-8 mq1125:pr-8 mq1125:box-border">
      <div className="w-[295px] flex flex-row items-center justify-start">
        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start">
          <div className="overflow-hidden flex flex-col items-start justify-start relative">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/aeternazen-color-logo-no-background-1.svg"
            />
            <img
              className="w-[72px] h-[72px] overflow-hidden shrink-0 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/darkmode-false@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[598px] flex flex-row items-center justify-center gap-[0px_16px] max-w-full mq450:w-[255px]">
        <button className="cursor-pointer py-2 px-[19px] bg-text-success rounded-xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-pale-emerald hover:bg-limegreen hover:box-border hover:border-[1px] hover:border-solid hover:border-mediumseagreen">
          <div className="relative text-base leading-[150%] font-heading-desktop-h2 text-border-primary text-left mq1125:hidden">
            WATCH MY FREE TRAINING
          </div>
        </button>
        <nav className="m-0 flex-1 overflow-hidden flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-link-secondary font-text-small-link mq450:hidden">
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[150%]">Training</div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[150%]">Articles</div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[150%]">Products</div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <FormControl
              className="font-text-small-link text-base text-link-secondary"
              variant="standard"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "67px",
                height: "24px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Content1;
