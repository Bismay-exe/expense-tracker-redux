import React from 'react'

const FilterBar = () => {
  return (
    <div className="filters-bar">

      {/* Search Input */}
      <div className="search-bar">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search transactions..." />
      </div>

      {/* Type Filter */}
      <select id="typeFilter">
        <option value="all">All Types</option>
        <option value="income">Income Only</option>
        <option value="expense">Expense Only</option>
      </select>

      {/* Category Filter */}
      <select id="categoryFilter">
        <option value="all">All Categories</option>
        <option value="Food & Dining">Food &amp; Dining</option>
        <option value="Shopping">Shopping</option>
        <option value="Recharge & Bills">Recharge &amp; Bills</option>
        <option value="Petrol & Auto">Petrol &amp; Auto</option>
        <option value="Utilities">Utilities</option>
        <option value="Salary">Salary</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

    </div>
  )
}

export default FilterBar
