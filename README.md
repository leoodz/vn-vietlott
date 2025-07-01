# 📊 Vietlott Power 6/55 Scraper

**Vietlott Power 6/55 Scraper** là một dự án mã nguồn mở thu thập **kết quả xổ số Vietlott Power 6/55** từ trang web **Minh Ngọc**, bắt đầu từ **01/08/2017** đến hiện tại. Dữ liệu bao gồm các con số trúng thưởng, số phụ và chi tiết các giải thưởng được lưu trữ trong file **JSON**. Hệ thống hỗ trợ **tự động cập nhật định kỳ hàng tuần** thông qua **GitHub Actions**.

---

## 🚀 Tính năng chính

- ✅ **Backfill toàn bộ lịch sử** từ 01/08/2017 đến nay
- 🔢 Lưu dữ liệu chi tiết:
  - Ngày quay thưởng (`date`)
  - 6 số chính (`numbers`)
  - Số phụ (`bonus`)
  - Thông tin các giải thưởng:
    - Jackpot 1 & 2
    - Giải nhất, nhì, ba (số lượng & giá trị)
- 📅 **Tự động cập nhật** dữ liệu mới vào mỗi **Thứ Ba, Năm, Bảy lúc 18:35 (GMT+7)** (tương đương 11:35 UTC)
- 🔓 **Dữ liệu JSON công khai**, có thể sử dụng cho:
  - Báo cáo
  - Phân tích thống kê
  - Trực quan hóa dữ liệu (data viz)

---

## 🗂️ Cấu trúc dự án

```text
.
├── scripts/
│ └── scrapeToday.js # Lấy kết quả quay thưởng mới nhất
├── backfill.js # Lấy toàn bộ dữ liệu lịch sử
├── .github/
│ └── workflows/
│ ├── backfill.yml # (Tuỳ chọn) Tự động backfill qua GitHub Actions
│ └── update-daily.yml # Cập nhật định kỳ vào T3/T5/T7
├── results/
│ └── power6x55.json # File chứa kết quả xổ số
├── package.json # Danh sách dependencies
└── README.md # Tài liệu dự án
```

---

## 📦 Cài đặt & sử dụng

### 1. Clone dự án

```bash
git clone https://github.com/leoodz/vn-vietlott.git
cd vn-vietlott
```
2. Cài đặt dependencies
```bash
npm install axios cheerio
```

🤖 GitHub Actions
Workflow tự động (update-daily.yml) đã được cấu hình để chạy vào:

Thứ Ba, Năm, Bảy lúc 11:10 UTC (~18:10 GMT+7)

Bạn chỉ cần push code lên GitHub, mọi thứ sẽ chạy tự động.

🧪 Cấu trúc JSON mẫu
```json
[
  {
    "date": "28-06-2025",
    "numbers": ["08", "11", "13", "20", "45", "50"],
    "bonus": "25",
    "prizes": {
      "jackpot1": {
        "count": 0,
        "amount": "300,000,000,000đ"
      },
      "jackpot2": {
        "count": 2,
        "amount": "6,115,269,375đ"
      },
      "giai_nhat": {
        "count": 37,
        "amount": "40,000,000đ"
      },
      "giai_nhi": {
        "count": 2132,
        "amount": "500,000đ"
      },
      "giai_ba": {
        "count": 46933,
        "amount": "50,000đ"
      }
    }
  },
  ...
]
```

🌐 Giao diện web để tra cứu và tham gia cùng cộng đồng:
```https://leoodz.dev/tools/lottery-predictor```

🎯 Kế hoạch tương lai
🔍 Thu thập thêm dữ liệu Jackpot 3 nếu có

📩 Tích hợp bot Slack/Telegram thông báo khi có kết quả mới
Truy vấn theo ngày

Xuất dữ liệu ra CSV

🐳 Tạo Docker image cho triển khai đơn giản

☁️ Triển khai VPS/public API phục vụ cộng đồng

🤝 Góp ý & Đóng góp
Fork & PR nếu bạn muốn thêm tính năng hoặc tối ưu code

Mọi lỗi hoặc đề xuất, vui lòng tạo issue tại đây

🪪 Giấy phép
Dự án được phát hành theo giấy phép MIT License.
Tự do sử dụng, chia sẻ và chỉnh sửa — miễn bạn giữ lại credit!

Made with 💙 by @leoodz
