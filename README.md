📊 Vietlott Power6x55 Scraper
Dự án này thu thập kết quả xổ số Power 6/55 của Vietlott từ website Minh Ngọc từ ngày 01‑08‑2017 đến hiện tại, lưu trữ dữ liệu số trúng thưởng và giải thưởng vào file JSON, đồng thời tự động cập nhật hàng tuần thông qua GitHub Actions.

🚀 Tính năng chính
Backfill toàn bộ từ 01‑08‑2017 đến hiện tại, với:

Ngày quay (date)

6 số chính (numbers)

Số phụ (bonus)

Thông tin giải thưởng (Jackpot 1, Jackpot 2, Giải nhất, nhì, ba), gồm số lượng trúng và giá trị từng giải.

Cập nhật tự động theo lịch (cron job): mỗi thứ Ba, Năm, Bảy vào khung giờ sau quay (UTC+7), dòng mới sẽ được thêm vào JSON nếu chưa có.

Mở data JSON công khai: mọi người có thể clone repo hoặc truy cập raw JSON để sử dụng phục vụ báo cáo, phân tích, hiển thị trực quan,...

🗂️ Cấu trúc dự án
├── scripts/
│   └── scrapeToday.js       # Lấy dữ liệu draw hôm nay
├── backfill.js             # Chạy 1 lần để lấy dữ liệu lịch sử
├── .github/
│   └── workflows/
│       ├── backfill.yml    # (tuỳ chọn) Automation backfill
│       └── update-daily.yml # GitHub Action cập nhật hàng tuần
├── results/
│   └── power6x55.json      # Kết quả xổ số
├── package.json
└── README.md               # File này
📦 Cài đặt & sử dụng
Clone repo:

bash
Copy
Edit
git clone https://github.com/<tên‑repo>.git
cd <tên‑repo>
Cài dependencies:

npm install axios cheerio
Backfill toàn bộ:

bash
Copy
Edit
node backfill.js
→ Kết quả sẽ được lưu tại results/power6x55.json.

Chạy cập nhật thủ công:

bash
Copy
Edit
node -e "require('./scripts/scrapeToday')().then(console.log).catch(console.error)"
Thiết lập GitHub Actions:

.github/workflows/update-daily.yml đã cấu hình để chạy thái thứ Ba/Năm/Bảy lúc ~19:10 giờ VN. Bạn chỉ cần push lên repo.

📄 Cấu trúc JSON mẫu
[
  {
    "date": "28-06-2025",
    "numbers": ["08","11","13","20","45","50"],
    "bonus": "25",
    "prizes": {
      "jackpot1": { "count": 0, "amount": "300,000,000,000đ" },
      "jackpot2": { "count": 2, "amount": "6,115,269,375đ" },
      "giai_nhat": { "count": 37, "amount": "40,000,000đ" },
      "giai_nhi": { "count": 2132, "amount": "500,000đ" },
      "giai_ba": { "count": 46933, "amount": "50,000đ" }
    }
  },
  {...}
]
🎯 Kế hoạch tương lai
🚀 Mở rộng: Thu thập thêm Jackpot 3, giải đặc biệt nếu có.

⏰ Tích hợp Slack/Telegram bot để thông báo khi có kết quả mới.

🛠 Trang web cho phép truy vấn theo ngày hoặc export CSV.

☁️ Triển khai kèm Docker hoặc trên VPS.

🤝 Góp ý & Phát triển
Clone và gửi PR nếu bạn muốn đóng góp.

Mọi issue hoặc đề xuất feature vui lòng mở ở mục Issues.

🪪 Giấy phép
Dự án mã nguồn mở miễn phí. Bạn có thể sử dụng, chỉnh sửa và phân phối lại theo nhãn MIT.

