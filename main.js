// Sample data
const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  values: [30000, 45000, 42000, 50000, 48000, 54000]
};

const userData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  values: [45, 40, 15]
};

const transactions = [
  { id: 'TRX001', customer: 'John Doe', amount: '$1,200', status: 'Completed' },
  { id: 'TRX002', customer: 'Jane Smith', amount: '$850', status: 'Pending' },
  { id: 'TRX003', customer: 'Bob Johnson', amount: '$2,400', status: 'Completed' },
  { id: 'TRX004', customer: 'Alice Brown', amount: '$950', status: 'Failed' }
];

// Initialize Charts
function initializeCharts() {
  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: revenueData.labels,
      datasets: [{
        label: 'Revenue',
        data: revenueData.values,
        borderColor: '#4361ee',
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(67, 97, 238, 0.1)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });

  // User Distribution Chart
  const userCtx = document.getElementById('userChart').getContext('2d');
  new Chart(userCtx, {
    type: 'doughnut',
    data: {
      labels: userData.labels,
      datasets: [{
        data: userData.values,
        backgroundColor: ['#4361ee', '#3f37c9', '#3a0ca3']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Populate Transactions Table
function populateTransactionsTable() {
  const tableBody = document.getElementById('transactionsTable');
  transactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${transaction.id}</td>
      <td>${transaction.customer}</td>
      <td>${transaction.amount}</td>
      <td>
        <span class="status ${transaction.status.toLowerCase()}">
          ${transaction.status}
        </span>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
  initializeCharts();
  populateTransactionsTable();
});