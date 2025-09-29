import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'

const AdminSettings: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-muted-foreground">Manage application settings and preferences</p>

      <div className="mt-6 grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>General</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Site name, description, and other basics.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminSettings
