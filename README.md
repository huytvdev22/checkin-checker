# Checkin Checker 📊

Công cụ phân tích dữ liệu chấm công mạnh mẽ, riêng tư và hoàn toàn miễn phí.

**Truy cập:**
- [checkin-checker.web.app](https://checkin-checker.web.app) (Firebase)
- [checkin-checker.pages.dev](https://checkin-checker.pages.dev) (Cloudflare - Tốc độ cao)

## ✨ Tính năng chính

- **Phân tích tự động**: Tự động bóc tách dữ liệu từ file log chấm công thô.
- **Phát hiện vi phạm**: Tự động tính toán số phút đi muộn, về sớm.
- **Quy tắc đặc biệt**: 
  - Hỗ trợ quy tắc về sớm 1 tiếng vào ngày Thứ 6.
  - Quản lý hạn mức (quota) về sớm có phép hàng tháng (ví dụ: tối đa 2 lần/tháng, mỗi lần ≤ 90 phút).
- **Phân tích lịch**: Tự động nhận diện cuối tuần và ngày làm việc.
- **Quyền riêng tư tuyệt đối**: 100% logic xử lý tại trình duyệt (Local JS), không gửi dữ liệu lên server hay AI.

## 🛠 Công nghệ sử dụng

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Lucide Icons
- **Date Handling**: `date-fns` cho việc xử lý thời gian chính xác.
- **Deployment**: Tự động hóa qua GitHub Actions và Firebase Hosting.

## 🚀 Cài đặt Local

```bash
# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev

# Build sản phẩm
npm run build
```

## 🌐 Triển khai (CI/CD)

Dự án đã được cấu hình sẵn để tự động deploy lên Firebase Hosting mỗi khi bạn push code lên nhánh `main`.

1. Thêm secret `FIREBASE_SERVICE_ACCOUNT_CHECKIN_CHECKER_8F2B5` vào GitHub Settings.
2. Push code: `git push origin main`.