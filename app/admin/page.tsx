'use client'

import { useState } from 'react'
import { 
  Package, Users, BarChart, Settings, 
  PlusCircle, Edit, Trash2, Upload 
} from 'lucide-react'

export default function AdminDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Vaporesso XROS', price: 450, stock: 25, category: 'Devices' },
    { id: 2, name: 'Elf Bar 5000', price: 300, stock: 50, category: 'Disposable' },
    { id: 3, name: 'Salt Nicotine 30ml', price: 200, stock: 100, category: 'Liquids' }
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-dark text-white">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <p className="text-gray-400 text-sm">VapeEgypt Control Center</p>
        </div>

        <nav className="p-4">
          {[
            { icon: Package, label: 'Products', count: 45 },
            { icon: Users, label: 'Customers', count: 1234 },
            { icon: BarChart, label: 'Analytics', count: null },
            { icon: Settings, label: 'Settings', count: null }
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 mb-2"
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1">{item.label}</span>
              {item.count && (
                <span className="bg-primary-500 text-xs px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Manage your vape store efficiently</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Revenue</p>
                <p className="text-3xl font-bold">EGP 45,230</p>
              </div>
              <BarChart className="w-12 h-12 text-primary-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Orders</p>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <Package className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Active Customers</p>
                <p className="text-3xl font-bold">856</p>
              </div>
              <Users className="w-12 h-12 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Products Management</h2>
            <button className="bg-primary-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              Add Product
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">ID</th>
                  <th className="text-left p-3">Product Name</th>
                  <th className="text-left p-3">Category</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Stock</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{product.id}</td>
                    <td className="p-3 font-medium">{product.name}</td>
                    <td className="p-3">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {product.category}
                      </span>
                    </td>
                    <td className="p-3">EGP {product.price}</td>
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        product.stock > 20 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-blue-50 rounded">
                          <Edit className="w-4 h-4 text-blue-500" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Bulk Upload</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Drag & drop product CSV file</p>
              <button className="bg-gray-100 px-4 py-2 rounded-lg">
                Select File
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">Store Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Store Status</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>🟢 Open</option>
                  <option>🟡 Maintenance</option>
                  <option>🔴 Closed</option>
                </select>
              </div>
              <button className="w-full bg-dark text-white py-3 rounded-lg">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
