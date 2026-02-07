import { NextRequest, NextResponse } from 'next/server';

// Mock user database - in real app, this would be a database
const mockUsers = [
  { id: '1', email: 'john@example.com', name: 'John Doe', phone: '+1 (555) 123-4567' },
  { id: '2', email: 'jane@example.com', name: 'Jane Smith', phone: '+1 (555) 987-6543' }
];

export async function GET(request: NextRequest) {
  try {
    // Get auth token from cookies
    const authToken = request.cookies.get('auth-token')?.value;
    
    if (!authToken) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    
    // Decode and validate token
    let user;
    try {
      user = JSON.parse(atob(authToken));
    } catch (error) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    
    // Find user in mock database
    const userData = mockUsers.find(u => u.id === user.id);
    
    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Return user data
    return NextResponse.json({
      user: userData,
      timestamp: new Date().toISOString(),
      offline: false
    });
    
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authToken = request.cookies.get('auth-token')?.value;
    
    if (!authToken) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }
    
    const user = JSON.parse(atob(authToken));
    const userData = mockUsers.find(u => u.id === user.id);
    
    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    const body = await request.json();
    
    // Update user data (in real app, this would update database)
    const updatedUser = { ...userData, ...body };
    
    return NextResponse.json({
      user: updatedUser,
      message: 'Profile updated successfully',
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
