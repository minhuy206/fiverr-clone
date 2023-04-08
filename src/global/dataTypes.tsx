import store from "../store/store";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: Array<string>;
  certification: Array<string>;
  bookingJob: Array<string>;
}

export interface Job {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}

export interface Gig {
  id: number;
  congViec: {
    id: number;
    tenCongViec: string;
    danhGia: number;
    giaTien: number;
    nguoiTao: number;
    hinhAnh: string;
    moTa: string;
    maChiTietLoaiCongViec: number;
    moTaNgan: string;
    saoCongViec: number;
  };
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface Review {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}

export interface JobType {
  id: number;
  tenLoaiCongViec: string;
}

export interface DetailJobType {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: DetailJobTypeGroup[];
}

export interface DetailJobTypeGroup {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: [
    {
      id: number;
      tenChiTiet: string;
    },
    {
      id: number;
      tenChiTiet: string;
    }
  ];
}

export interface Service {
  id: number;
  maCongViec: number;
  maNguoiThue: number;
  ngayThue: string;
  hoanThanh: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface LoginModel {
  email: string;
  password: string;
}

// State

export type rootState = ReturnType<typeof store.getState>;

export interface UserState {
  users: User[];
  error: any;
  loading: boolean;
  user: User;
}

export interface JobState {
  jobs: Job[];
  error: any;
  loading: boolean;
  job: Job;
}

export interface JobTypeState {
  types: JobType[];
  error: any;
  loading: boolean;
  type: JobType;
}

export interface ServiceState {
  services: Service[];
  error: any;
  loading: boolean;
  service: Service;
}

export interface GigsState {
  gigs: Gig[] | null;
  error: any;
  loading: boolean;
}
export interface GigState {
  gig: Gig | null;
  reviews: Review[] | null;
  error: any;
  loading: boolean;
}

export interface DetailJobTypesState {
  detailJobTypes: DetailJobType[] | null;
  loading: boolean;
  error: any;
}

// Prop
export interface ReviewProps {
  reviewItem: Review | undefined;
}

export interface ReviewsProps {
  reviews: Review[] | null;
}

export interface TabProps {
  gig: Gig | null;
}
export interface TabPaneProps {
  gig: Gig | null;
  quality: string;
}

export interface BucketsProps {
  detailJobTypes: DetailJobType | undefined;
}

export interface BucketCardProps {
  detailJobTypeGroup: DetailJobTypeGroup | undefined;
}
export interface BucketCollapseProps {
  detailJobTypeGroup: DetailJobTypeGroup[] | undefined;
}

export interface AuthState {
  loading: boolean;
  data: any | null;
  error: any | null;
}
